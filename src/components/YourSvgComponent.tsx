import Gradient from './Common/Gradient';

const YourComponent = () => {
  return (
    <div>
      <Gradient>
        <svg>
          <linearGradient>
            <stop stopColor="#4A6CF7" />
            {/* more stops... */}
          </linearGradient>
        </svg>
      </Gradient>
      
      {/* Rest of your component */}
    </div>
  );
}; 