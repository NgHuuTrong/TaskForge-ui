import Background from '../../assets/AuthenticationBackground.jpg';
export const AuthenticateFormOverLay = ({ isSignIn }) => {
  return (
    <div
      className="absolute right-0 top-0 z-40 h-full overflow-hidden shadow-2xl"
      style={{
        transition: 'transform 0.6s ease-in-out',
        width: '50%',
        transform: isSignIn ? '' : 'translateX(-100%)',
        borderTopLeftRadius: isSignIn ? '20px' : '0px',
        borderBottomLeftRadius: isSignIn ? '20px' : '0px',
        borderTopRightRadius: isSignIn ? '0px' : '20px',
        borderBottomRightRadius: isSignIn ? '0px' : '20px',
      }}
    >
      <div
        className="relative h-full"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '0 0',
          transform: isSignIn ? '' : 'translate(50%)',
          width: '768px',
          transition: 'transform 0.6s ease-in-out',
          left: '-100%',
        }}
      >
        <div
          className="absolute top-0 flex h-full w-1/2 flex-col items-center justify-center px-12 text-center"
          style={{
            transition: 'transform ease-in-out 0.6s',
            transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
          }}
        >
          <div
            style={{ backgroundColor: 'rgba(255,255,255, 0.5)' }}
            className="p-16"
          >
            <h1 className="mb-16 text-left text-4xl text-white">
              Hello, Friend!
            </h1>
            <p className="text-left text-xl text-white">
              Sign up now and experience the power of our TaskForge task
              management website. Seamlessly create, organize, and track your
              tasks and projects. Unleash your productivity potential with a
              simple and efficient sign-up process
            </p>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-12 text-center"
          style={{
            transition: 'transform ease-in-out 0.6s',
            transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
          }}
        >
          <div
            style={{ backgroundColor: 'rgba(255,255,255, 0.5)' }}
            className="p-16"
          >
            <h1 className="mb-16 text-left text-4xl text-white">
              Hello, Friend!
            </h1>
            <p className="text-left text-xl text-white">
              Sign in to our TaskForge task management platform and gain access
              to your organized world of tasks, projects, and productivity
              tools. Take control, stay focused, and collaborate effortlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
