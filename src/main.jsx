import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Customer from './customer/Customer.jsx';


createRoot(document.getElementById('root')).render(
    <Customer/>
)
