import styles from "./input.module.scss";
export default function Square({ register, options, name, value }) {
  return (
    <div
      className={`relative mb-6 ${styles.formWidth}`}
      data-te-input-wrapper-init
    >
      <input
        type="text"
        className="peer block min-h-[auto] shadow-md w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={name}
        placeholder={name}
        value={value ? value : undefined}
        {...register(options.name, { ...options.options })}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
