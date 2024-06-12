import useFetch from "../hooks/useFetch";
import Pending from "../components/Pending";
function Users() {
  const { data, isPending } = useFetch("https://onko-fergana.uz/user");
  // const {
  //   data: deleteData,
  //   loading: deleteLoading,
  //   error: deleteError,
  //   refetch: refetchDelete,
  // } = useFetch(`http://api.onko-fergana.uz/user/del?id=1`, "DELETE");
  function clickDeleteBtn(user) {
    console.log(user);
  }
  return (
    <div className="container">
      <Pending isPending={isPending} />
      <div className="overflow-x-auto mt-3">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Ism Familiya sharifi</td>
              <td>Telefon raqami</td>
              <td>Telegram username</td>
              <td>Yashah manzili</td>
              <td>Tug'ilgan kun</td>
              <td>Telegram ID</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data != null &&
              data.data.map((user) => {
                return (
                  <tr className="border-b-orange-500" key={user.id}>
                    <th>{user.id}</th>
                    <td>
                      {user.last_name} {user.name} {user.middle_name}
                    </td>
                    <td>{user.phone_number}</td>
                    <td>{user.username}</td>
                    <td>
                      {user.region} {user.village} {user.city}
                    </td>
                    <td>{user.birth_day}</td>
                    <td>{user.tg_id}</td>
                    <th>{user.id}</th>
                    <div className="flex gap-2 my-2">
                      {" "}
                      <button
                        onClick={() => clickDeleteBtn(user.id)}
                        className="btn btn-error btn-sm text-sm">
                        DELETE
                      </button>
                    </div>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>Ism Familiya sharifi</td>
              <td>Telefon raqami</td>
              <td>Telegram username</td>
              <td>Yashah manzili</td>
              <td>Tug'ilgan kun</td>
              <td>Telegram ID</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-between mt-10">
        <h2 className="text-xl">
          Jami foydalanuvchilar : {data != null && data.data.length}ta
        </h2>
      </div>
    </div>
  );
}

export default Users;
