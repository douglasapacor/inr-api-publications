async function NullNumber(value: any): Promise<string | number> {
  try {
    if (!value) return "NULL"

    if (isNaN(parseInt(value))) return "NULL"

    return parseInt(value)
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export { NullNumber }
