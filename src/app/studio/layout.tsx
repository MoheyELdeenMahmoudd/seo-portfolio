export const metadata = {
  title: 'Sanity Studio',
  description: 'Manage content for your portfolio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
