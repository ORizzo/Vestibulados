import axios from "axios";

export default async function renderPosts() {
  try {
    const res = await axios.get("http://localhost:8080");
    console.log(res)
  } catch (err) {
    console.log(err);
  }
}
