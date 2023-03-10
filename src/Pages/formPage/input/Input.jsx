import styles from "./input.module.scss";
export default function Input({
  register,
  options,
  name,
  defaultResponse,
  errors = null,
}) {
  return (
    <div
      className={`relative mb-1 mx-1 ${styles.formWidth} flex flex-col`}
      data-te-input-wrapper-init
    >
      <input
        type="text"
        className="input input-bordered w-full max-w"
        id={name}
        placeholder={name}
        {...register(options.name, { ...options.options })}
        value={defaultResponse ?? defaultResponse}
      />
      <div className="text-error text-sm">{errors}</div>
    </div>
  );
}
