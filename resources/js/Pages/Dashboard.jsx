import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (

        <div >
          
            <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            

            
        </AuthenticatedLayout>

        </div>
       
    );
}
