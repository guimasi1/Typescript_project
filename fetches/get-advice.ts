export default async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res) throw new Error("Something went wrong");
    const data = await res.json();
    console.log(data.slip);
    return data.slip;
  } catch (err) {
    console.log(err);
  }
}
