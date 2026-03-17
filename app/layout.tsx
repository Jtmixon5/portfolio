import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Jacob Mixon - Developer + Engineer + IT Professional',
	description:
		'Welcome to my portfolio — I’m Jacob Mixon, a software developer and engineer focused on creating efficient, reliable, and impactful systems.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'Java',
		'Python',
		'C',
		'C++',
		'MATLAB',
		'Assembly',
		'VHDL',
		'Git',
		'Web Development',
		'Jacob Mixon',
	],
	authors: [{ name: 'Jacob Mixon' }],
	creator: 'Jacob Mixon',
	openGraph: {
		title: 'Jacob Mixon - Portfolio',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://jacobmixon.com',
		siteName: 'Jacob Mixon - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jacob Mixon - Developer and Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
