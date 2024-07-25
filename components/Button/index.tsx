export type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button ({ children, className }: ButtonProps) {
  return (
    <button 
      className={`
      bg-primary 
      rounded-[8px]
      px-[32px]
      py-[12x]
      text-white
      theme-violet
      ${className}`}
    >
      { children }
    </button>
  )
}