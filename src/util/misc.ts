export async function minDuration<T>(
  callback: Promise<T>,
  delay = 1000
): Promise<T> {
  const a = await Promise.all([
    callback,
    new Promise((r) => setTimeout(r, delay)),
  ])
  return a[0]
}
