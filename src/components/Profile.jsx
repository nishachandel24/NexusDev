export default function ProfileSection({ user }) {
  const { name, role, bio, isAvailable } = user;

  return (
    <section>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{bio}</p>
      <p>{isAvailable? "Available":"Not Avalilable"}</p>
    </section>
  );
}