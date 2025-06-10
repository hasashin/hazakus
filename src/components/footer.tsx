export function Footer() {
  return (
    <div className="h-footer min-w-screen">
      <div className="flex ld:w-5xl mx-auto items-center justify-center">
        <p>
          &copy;&nbsp;
          { new Date().getFullYear() }
          &nbsp;Dominik Hażak
        </p>
      </div>
    </div>
  )
}
