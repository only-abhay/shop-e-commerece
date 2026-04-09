
// pages/Contact.jsx
export default function Contact() {
  return (
    <div className="p-10 text-center mt-10">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <input className="border p-2 m-2" placeholder="Your Name" />
      <input className="border p-2 m-2" placeholder="Email" />
      <br />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">Send</button>
    </div>
  );
}