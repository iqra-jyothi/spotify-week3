import 'react-toastify/dist/ReactToastify.css'; 
// Import Toastify styles
import { toast } from 'react-toastify';
// Toast handlers
export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: 'top-right',
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: 'top-right',
  });
};
// export const handleError = (message) => {
//   toast.error(message, {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000,
//   });
// };