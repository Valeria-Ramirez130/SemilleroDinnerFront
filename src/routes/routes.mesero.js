import {MeseroLayout} from "../layouts";
import {LoginMesero} from "../pages/Mesero";


const routesAdmin=[
    {
        path:"/mesero",
        layout: MeseroLayout,
        component: LoginMesero,
    }
];

export default routesAdmin;