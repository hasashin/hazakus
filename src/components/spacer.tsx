type SpacerProps = { flex?: boolean }
export function Spacer({ flex }: SpacerProps) {
  let classList = 'm-auto'
  if (flex) {
    classList += ' flex-1'
  }
  return (
    <div className={classList} />
  )
}
