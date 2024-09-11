//Footer.tsx
export default function Footer() {
	const year = new Date().getFullYear();
	return <div className="text-center p-8 dark:text-gray-400">&copy; {year} Atlas School</div>;
}
