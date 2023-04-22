import styles from '@/styles/Committees.module.css';
import Member from '@/components/Member';
import committeeMembers from './committeeMembers';

export default function Executives() {
	return (
		<div className={styles.image__container}>
			<Member
				name="Allison Pham"
				title="President"
				image={committeeMembers[2]['src']}
				linkedin="https://www.linkedin.com/in/allison-nhi-pham/"
				email="anp200002@utdallas.edu"
			/>
			<Member
				name="Caroline Lowes"
				title="Vice President"
				image={committeeMembers[5]['src']}
				linkedin="https://www.linkedin.com/in/caroline-lowe-229334233/"
				email="bxm210033@utdallas.edu"
			/>
			<Member
				name="Bryan Macias"
				title="Vice President"
				linkedin="https://www.linkedin.com/in/bryanmacias333/"
				email="chi190001@utdallas.edu"
			/>
			<Member
				name="Alec Manley"
				title="Treasurer"
				image={committeeMembers[1]['src']}
				linkedin="https://www.linkedin.com/in/alecdmanley/"
				email="adm180016@utdallas.edu"
			/>
			<Member
				name="Krishna Chilukuri"
				title="Secretary"
				image={committeeMembers[8]['src']}
				linkedin="https://www.linkedin.com/in/krishna-chilukuri-821479214/"
				email="kxc200033@utdallas.edu"
			/>
		</div>
	);
}
