export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col w-1/4 mx-auto space-y-1 justify-center content-center flex-wrap">
      <h1 className="text-center">Password Recovery</h1>
      <p className="text-center">
        Enter your email address to reset your password
      </p>
      <form className="bg-white shadow-md rounded">
        <input name={"email"} placeholder="Email" />

        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
