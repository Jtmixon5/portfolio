'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Projects
				</motion.h2>

				<div className="space-y-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Single Cylcle Computer</h3>
										<p className="text-gray-400">
											Designed and verified a 32-bit single-cycle CPU in Verilog
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Implemented</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Modular instruction fetch/decode/execute stage</li>
												<li>• Microcode ROM</li>
												<li>• ALU control</li>
												<li>• NZCV flag logic and conditional branching</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Skills Used</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Hardware Architecture</li>
												<li>• RTL Design</li>
												<li>• Debugging</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Top Level
												</text>
											</g>
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Instruction and Data Memory
												</text>
											</g>
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
													CPU Top Level
												</text>
												<rect x="110" y="250" width="85" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="153" y="275" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Microcode
												</text>
											</g>
											<g>
												<rect x="20" y="190" width="85" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="110" y="190" width="85" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="205" y="190" width="85" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="295" y="190" width="85" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="63" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Fetch
												</text>
												<text x="153" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Decode
												</text>
												<text x="248" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Registers
												</text>
												<text x="337" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Execute
												</text>
											</g>

											

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="300" y1="60" x2="300" y2="140" />
												<line x1="110" y1="60" x2="110" y2="80" />
												<line x1="63" y1="170" x2="63" y2="190" />
												<line x1="153" y1="170" x2="153" y2="190" />
												<line x1="248" y1="170" x2="248" y2="190" />
												<line x1="337" y1="170" x2="337" y2="190" />
												<line x1="153" y1="250" x2="153" y2="230" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Weather Station */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Weather Station</h3>
										<p className="text-gray-400">
											Designed and built a real-time environmental monitoring system with cloud integration.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Implemented</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Sensor integration (temperature, humidity, rainfall)</li>
												<li>• Data acquisition and filtering</li>
												<li>• ThingSpeak API integration for live data</li>
												<li>• Microcontroller-based data transmission</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Skills Used</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Embedded Systems</li>
												<li>• C/C++</li>
												<li>• IoT / Cloud APIs</li>
												<li>• Hardware Debugging</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Project Photo</h4>
									<div className="project-image-wrapper">
										<Image src="/weather-station.jpg" alt="Weather Station" fill className="project-image" />
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
	initial={{ opacity: 0, y: 20 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true }}
	className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
>
	<div className="p-8">
		<div className="space-y-6">
			<div>
				<h3 className="text-2xl font-bold mb-4">Patient Data Management System</h3>
				<p className="text-gray-400">
					Developed a dynamic backend system for managing and transferring patient health data without a traditional database.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-6">
				<div>
					<h4 className="text-sm font-semibold text-blue-400 mb-3">Implemented</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>• Dynamic system architecture without database dependency</li>
						<li>• HAPI API integration for patient data exchange</li>
						<li>• JSON-based data transfer between systems</li>
						<li>• Backend server for processing and routing medical data</li>
					</ul>
				</div>
				<div>
					<h4 className="text-sm font-semibold text-purple-400 mb-3">Skills Used</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>• Java</li>
						<li>• REST APIs / HAPI FHIR</li>
						<li>• JSON Data Handling</li>
						<li>• Backend Development</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</motion.div>

					<motion.div
	initial={{ opacity: 0, y: 20 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true }}
	className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
>
	<div className="p-8">
		<div className="space-y-6">
			<div>
				<h3 className="text-2xl font-bold mb-4">Servo Controller Peripheral</h3>
				<p className="text-gray-400">
					Designed an FPGA-based peripheral for controlling multiple hobby servos with precise timing.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-6">
				<div>
					<h4 className="text-sm font-semibold text-blue-400 mb-3">Implemented</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>• PWM signal generation for multiple servos</li>
						<li>• Configurable pulse width ranges</li>
						<li>• Velocity-based motion control</li>
						<li>• Register-mapped control interface</li>
					</ul>
				</div>
				<div>
					<h4 className="text-sm font-semibold text-purple-400 mb-3">Skills Used</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>• Verilog / RTL Design</li>
						<li>• FPGA Development</li>
						<li>• Digital Logic Design</li>
						<li>• Hardware Debugging</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</motion.div>
				</div>
			</div>
		</section>
	);
}
