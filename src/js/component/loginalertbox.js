import React from 'react';
    import { useAlert } from 'react-alert';


    const AlertMessageBox = ({ username, password }) => {
        const alert = useAlert();

        console.log(data);

        const showAlert = () =>  {
            switch (type) {
                case 'error':
                    alert.error(<div style={{color: 'red'}}> data </div>);
                    return;
                case 'show':
                    alert.show(<div style={{color: 'white'}}> data </div>);
                    return;
                case 'info':
                    alert.success(<div style={{color: 'green'}}> data </div>);
                    return;
                default:
                    return;
            }
        };
        return 
        <div>
        { this.state.showSuccessAlert && <AlertMessageBox type={"success"} data={"Update succesfully"} /> }

        { this.state.showFailAlert && <AlertMessageBox type={"error"} data={"Data update failed"} /> };
        </div>
    };

    export default AlertMessageBox;