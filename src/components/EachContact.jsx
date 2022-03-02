import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

const EachContact = ({ userData, deleteUser }) => {
   return (
      <tbody className='dataBody'>
         {userData.map((user) => (
            <tr key={user.id}>
               <td>{`${user.firstName} ${user.lastName}`}</td>
               <td>{user.email}</td>
               <td>{user.phoneNumber}</td>
               <td onClick={() => deleteUser(user.id)}>
                  <Icon icon={trash} />
               </td>
            </tr>
         ))}
      </tbody>
   );
};

export default EachContact;
