type SpacerProps = { className?: string }
export function Spacer({ className }: SpacerProps) {
  className += ' flex-grow'
  return (
    <div className={className} />
  )
}
