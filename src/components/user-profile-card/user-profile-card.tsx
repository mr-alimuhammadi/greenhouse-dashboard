import styles from "./user-profile-card.module.scss";

export default function UserProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.userAvatar}>
        <img src="static/images/user-profile.jpg" alt="user profile" />
      </div>
      <div className={styles.userInfo}>محمد علیمحمدی</div>
    </div>
  );
}
