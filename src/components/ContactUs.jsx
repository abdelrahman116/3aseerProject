import ContactCover from "../assets/ContactCover.jpg";
import contactPhoto from "../assets/contactPhoto.jpg";
export default function ContactUs() {
  return (
    <>
      <div
        className="w-full min-h-165.75 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactCover})` }}
      ></div>
      <div className="split flex justify-around gap-10">
        <div>
          <h1 className="mt-30 mr-30">تواصل معنا</h1>
          <form className="contact" action="submit">
            <label htmlFor="title-input" required>
              الاسم الكامل
            </label>
            <input type="text" />
            <label htmlFor="title-input">الايميل</label>
            <input type="email " required />
            <label htmlFor="title-input">رسالة</label>
            <input type="text" required />
            <button>إرسال</button>
          </form>
        </div>
        <img src={contactPhoto} alt="" />
      </div>
    </>
  );
}
