import { fetchServices } from './servicesSlice';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Services from './Services';
const Services = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services);
  
    useEffect(() => {
      dispatch(fetchServices());
    }, [dispatch]);
  
    useEffect(() => {
      if (services.status === 'succeeded') {
        setLoading(false);
      }
    }, [services]);
    
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Services</h1>
      {services.data.map((service) => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export defaultServices;


export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    status: 'idle',
    data: [],
    error: null,
  },
  reducers: {
    servicesRequested: (state) => {
      state.status = 'loading';
    },
    servicesReceived: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    servicesRequestFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});