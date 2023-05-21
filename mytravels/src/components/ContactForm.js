import "./ContactFormStyles.css";

export default function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to Us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
