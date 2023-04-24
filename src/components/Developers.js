import styles from '@/styles/Committees.module.css';
import Member from '@/components/Member';
import committeeMembers from './committeeMembers';
// cute comment
export default function Developers() {
	return (
		<div className={styles.image__container}>
			<Member
				name="James Odebiyi"
				image={committeeMembers[7]['src']}
				title="Lead Web Developer"
				linkedin="https://www.linkedin.com/in/james-odebiyi-a87049214/"
				email="jxo190003@utdallas.edu"
			/>
			<Member
				name="Oluwapelumi Adegoke"
				title="Assistant Web Developer"
				linkedin="https://www.linkedin.com/in/oluwapelumi-adegoke-9634561b6/"
				email="Oluwapelumi.Adegoke@UTDallas.edu"
			/>
			<Member
				name="Steven Nguyen"
				image={committeeMembers[16]['src']}
				title="Assistant Web Developer"
				linkedin="https://www.linkedin.com/in/stevenknguyen/"
				email="Steven.Nguyen7@UTDallas.edu"
			/>
			<Member
				name="Rita Kaushik"
				image={committeeMembers[15]['src']}
				title="Assistant Web Developer"
				linkedin="https://www.linkedin.com/in/ritakaushik/"
				email="rxk200044@utdallas.edu"
			/>
			<Member
				name="Arhum Khan"
				image={committeeMembers[14]['src']}
				title="Assistant Web Developer"
				linkedin="https://www.linkedin.com/in/arhum-khan47/"
				email="Arhum.Khan@UTDallas.edu"
			/>
		</div>
	);
}
