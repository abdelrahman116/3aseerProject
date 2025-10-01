import Cover2 from "../assets/coveSign.jpg";
export default function Sign() {
  return (
    <>
      <div
        className="w-full min-h-165.75 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${Cover2})` }}
      ></div>
      <div className="w-full formd">
        <form className="flex flex-col justify-center items-center " action="">
          <label htmlFor="title-input">الإسم</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />

          <label htmlFor="title-input">الوصف</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />

          <label htmlFor="title-input">العنوان</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />

          <label htmlFor="title-input">الهاتف</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />

          <label htmlFor="title-input">الجهة</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />

          <label htmlFor="title-input">الموقع الإلكتروني</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />

          <label htmlFor="title-input">اللوكيشن</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />

          <label htmlFor="title-input">الراعي/المشارك</label>
          <input className="h-13 w-133 border-1" type="text" name="" id="" />
          <button>التسجيل</button>
        </form>
      </div>
    </>
  );
}
