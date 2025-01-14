---
title: "Career Simulation 4"
description: "Hacking Mr. Robot Virtual Machine"
custom_link_label: "Live Report"
custom_link: "https://hcoco1.github.io/Career-Simulation-4/"
updatedDate: "Jul 3 2024"
category: "Cybersecurity"

repository: "https://github.com/hcoco1/Career-Simulation-4"
heroImage: "https://raw.githubusercontent.com/hcoco1/Career-Simulation-4/main/docs/images/vulnerability%20.webp"


---
## Hacking Mr. Robot Virtual Machine  ☠️

---

This report presents a structured methodology for ethical hacking and securing systems, specifically focusing on a vulnerable Vulnhub Virtual Machine called Mr. Robot, which hosts a WordPress site.

The process begins by creating a controlled, isolated environment to ensure safe testing without affecting live systems. Network scanning tools like Nmap identify live hosts, open ports, and available services, providing a detailed map of the target network.

The next phase involves enumeration, utilizing tools such as Gobuster and Wappalyzer to brute-force directories and identify technologies used by the target WordPress site. This information is crucial for understanding the target's infrastructure. Vulnerabilities are then identified using Nmap scripts and Nikto, which scan for outdated software like old versions of WordPress and potential security issues such as SQL injection or cross-site scripting in web servers.

Brute-force attacks use Python scripts and Hydra to guess login credentials and identify weak passwords and access points. Finally, the guide explains how to achieve a reverse shell using a PHP script or Metasploit, enabling control over the target system.

>In short, the guide underlines the importance of ethical hacking and responsible disclosure. It stresses that penetration testing is vital for improving security and maintaining secure systems when conducted ethically and with responsible disclosure. Responsible disclosure is a guideline and a commitment to the community and protecting the systems we test. This commitment makes the work of a penetration tester genuinely impactful.

<iframe width="560" height="315" src="https://www.youtube.com/embed/h_1kdILmgIE?si=TrA4vx9DwCsQu698" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
