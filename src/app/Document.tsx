export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>elgallo</title>
      <link rel="modulepreload" href="/src/client.tsx" />
      <link
        rel="icon"
        type="image/png"
        href="/el-gallo-512.png"
        sizes="512x512"
      />
      <link rel="apple-touch-icon" href="/el-gallo-512.png" />
    </head>
    <body>
      <div id="root">{children}</div>
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);
