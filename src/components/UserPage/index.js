import styled from 'styled-components';

const UserWrapper = styled.div`
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .username, .full_name, .email {
        display: flex;
        justify-content: space-between;
    }
`;

const UserPage = ({userData}) =>  {
  return (
    <UserWrapper>
        <div className="username">UserName<span>{userData?.username}</span></div>
        <div className="full_name">Full name<span>{userData?.full_name}</span></div>
        <div className="email">Email <span>{userData?.email}</span></div>
  </UserWrapper>
  );
}

export default UserPage;
