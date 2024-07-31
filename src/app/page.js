import Input from "@/components/common/Input";



export default function Home() {

  const formDetail = {
    name: 'Nitin',
    middleName: 'Ram',
    surname: 'Rathod',
    email: 'nitinrathod.tg@gmail.com',
    mobile: '9887898898',
  }
  return (
    <div>
      <Input value={formDetail?.name} labelText={'Name'}/>
      <Input value={formDetail?.middleName} labelText={'Middle Name'}/>
      <Input value={formDetail?.surname} labelText={'Surname'}/>
      <Input value={formDetail?.email} labelText={'Email'}/>
      <Input value={formDetail?.mobile} labelText={'Mobile'}/>
    </div>
  );
}
