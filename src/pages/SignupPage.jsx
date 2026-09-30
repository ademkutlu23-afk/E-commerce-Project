import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axiosInstance";

function SignupPage() {
  const [roles, setRoles] = useState([]);
  const [rolesLoading, setRolesLoading] = useState(true);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ shouldUnregister: true });

  const password = useWatch({ control, name: "password" });
  const selectedRoleId = useWatch({ control, name: "role_id" });
  const selectedRole = roles.find(
    (role) => role.id === Number(selectedRoleId),
  );
  const isStore = selectedRole?.code === "store";

  useEffect(() => {
    async function getRoles() {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);

        const customer = response.data.find(
          (role) => role.code === "customer",
        );

        if (customer) {
          setValue("role_id", String(customer.id));
        }
      } catch {
        toast.error("Roles could not be loaded.");
      } finally {
        setRolesLoading(false);
      }
    }

    getRoles();
  }, [setValue]);

  async function onSubmit(formData) {
    const signupData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role_id: Number(formData.role_id),
    };

    if (isStore) {
      signupData.store = {
        name: formData.store.name,
        phone: formData.store.phone,
        tax_no: formData.store.tax_no,
        bank_account: formData.store.bank_account
          .replaceAll(" ", "")
          .toUpperCase(),
      };
    }

    try {
      await api.post("/signup", signupData);
      toast.warn("You need to click link in email to activate your account!");

      if (window.history.length > 1) {
        history.goBack();
      } else {
        history.push("/");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Signup failed. Please check your information.";
      toast.error(errorMessage);
    }
  }

  const inputStyle =
    "mt-2 w-full rounded-md border border-[#E6E6E6] px-4 py-3 text-sm outline-none focus:border-[#23A6F0]";
  const errorStyle = "mt-1 text-xs text-red-500";

  return (
    <section className="bg-[#F7F9FC] px-6 py-12 md:py-20">
      <div className="mx-auto max-w-[560px] rounded-xl bg-white p-6 shadow-sm md:p-10">
        <div className="text-center">
          <p className="text-sm font-bold text-[#23A6F0]">CREATE ACCOUNT</p>
          <h1 className="mt-2 text-3xl font-bold text-[#252B42]">Sign Up</h1>
          <p className="mt-3 text-sm text-[#737373]">
            Fill in the form to create your account.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
          <label className="text-sm font-bold text-[#252B42]">
            Name
            <input
              type="text"
              className={inputStyle}
              {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters.",
                },
              })}
            />
            {errors.name && <p className={errorStyle}>{errors.name.message}</p>}
          </label>

          <label className="text-sm font-bold text-[#252B42]">
            Email
            <input
              type="email"
              className={inputStyle}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address.",
                },
              })}
            />
            {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
          </label>

          <label className="text-sm font-bold text-[#252B42]">
            Password
            <input
              type="password"
              className={inputStyle}
              {...register("password", {
                required: "Password is required.",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                  message:
                    "Use at least 8 characters with uppercase, lowercase, number and special character.",
                },
              })}
            />
            {errors.password && (
              <p className={errorStyle}>{errors.password.message}</p>
            )}
          </label>

          <label className="text-sm font-bold text-[#252B42]">
            Confirm Password
            <input
              type="password"
              className={inputStyle}
              {...register("confirmPassword", {
                required: "Please enter your password again.",
                validate: (value) =>
                  value === password || "Passwords do not match.",
              })}
            />
            {errors.confirmPassword && (
              <p className={errorStyle}>{errors.confirmPassword.message}</p>
            )}
          </label>

          <label className="text-sm font-bold text-[#252B42]">
            Role
            <select
              disabled={rolesLoading}
              className={inputStyle}
              {...register("role_id", { required: "Please select a role." })}
            >
              {rolesLoading && <option>Loading roles...</option>}
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            {errors.role_id && (
              <p className={errorStyle}>{errors.role_id.message}</p>
            )}
          </label>

          {isStore && (
            <div className="flex flex-col gap-5 rounded-lg bg-[#F7F9FC] p-5">
              <h2 className="text-lg font-bold text-[#252B42]">
                Store Information
              </h2>

              <label className="text-sm font-bold text-[#252B42]">
                Store Name
                <input
                  type="text"
                  className={inputStyle}
                  {...register("store.name", {
                    required: "Store name is required.",
                    minLength: {
                      value: 3,
                      message: "Store name must be at least 3 characters.",
                    },
                  })}
                />
                {errors.store?.name && (
                  <p className={errorStyle}>{errors.store.name.message}</p>
                )}
              </label>

              <label className="text-sm font-bold text-[#252B42]">
                Store Phone
                <input
                  type="tel"
                  placeholder="05551234567"
                  className={inputStyle}
                  {...register("store.phone", {
                    required: "Store phone is required.",
                    pattern: {
                      value: /^(\+90|0)?5\d{9}$/,
                      message: "Enter a valid Türkiye phone number.",
                    },
                  })}
                />
                {errors.store?.phone && (
                  <p className={errorStyle}>{errors.store.phone.message}</p>
                )}
              </label>

              <label className="text-sm font-bold text-[#252B42]">
                Store Tax ID
                <input
                  type="text"
                  placeholder="T1234V123456"
                  className={inputStyle}
                  {...register("store.tax_no", {
                    required: "Tax ID is required.",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Tax ID must be like T1234V123456.",
                    },
                  })}
                />
                {errors.store?.tax_no && (
                  <p className={errorStyle}>{errors.store.tax_no.message}</p>
                )}
              </label>

              <label className="text-sm font-bold text-[#252B42]">
                Store Bank Account
                <input
                  type="text"
                  placeholder="TR000000000000000000000000"
                  className={inputStyle}
                  {...register("store.bank_account", {
                    required: "IBAN is required.",
                    validate: (value) =>
                      /^TR\d{24}$/.test(
                        value.replaceAll(" ", "").toUpperCase(),
                      ) || "Enter a valid Türkiye IBAN address.",
                  })}
                />
                {errors.store?.bank_account && (
                  <p className={errorStyle}>
                    {errors.store.bank_account.message}
                  </p>
                )}
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || rolesLoading}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#23A6F0] px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting && (
              <span className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignupPage;
