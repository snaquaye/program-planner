export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col w-1/4 mx-auto space-y-1 justify-center content-center flex-wrap">
      <h1 className="text-center">Reest Password</h1>
      <p className="text-center">
        Enter you new password
      </p>
      <form className="bg-white shadow-md rounded w-full">
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name="password" id="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" />
        </div>

        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
