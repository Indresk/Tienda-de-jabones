import { BrowserRouter } from 'react-router-dom';
import {ToastProvider} from "@heroui/toast";

export function Providers({children}) {
  return (
    <BrowserRouter>
        <ToastProvider />
        {children}
    </BrowserRouter>
  )
}