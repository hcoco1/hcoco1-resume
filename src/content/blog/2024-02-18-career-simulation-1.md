---
title: "Exploring the Cyber Seas"
description: "Hey there, everyone! I'm super excited to kick off my adventure into cybersecurity...."
pubDate: "Feb 18 2024"
heroImage: "https://images.unsplash.com/photo-1660644807804-ffacfd7a4137?auto=format&fit=crop&w=927&h=927"
badge: "Cybersecurity Bootcamp"
tags: ["linux","cybersecurity"]
canonical_url: 'https://www.hcoco1.com/blog/2024-02-18-career-simulation-1'
---

Hey there 🚀, everyone! I'm super excited to kick off my adventure into cybersecurity. After getting my software engineer certification last year and enrolling in the <a href="https://digitalcloud.training/cloud-mastery-bootcamp/?megamenu" target="_blank">Cloud Mastery Bootcamp</a> this month, I've decided to dive into something new and fascinating.

My journey into cybersecurity isn't just about adding another skill to my repertoire; it's about exploring a field that captivates me and offers endless opportunities for growth and contribution.

I enrolled in a <a href="https://www.fullstackacademy.com/programs/cybersecurity-bootcamp" target="_blank">Cybersecurity  Bootcamp</a> offered by Fullstack Academy. The Fullstack Academy Cybersecurity Bootcamp prepares students to take multiple major cybersecurity certifications to help jumpstart their careers. It also prepares students for real-life work scenarios and environments. Additionally, students take part in career simulations alongside their cybersecurity training (Academy, 2024).

The first unit of the program provides a complete revision of the following topics:

**Cybersecurity Fundamentals:** Learn the fundamentals of cybersecurity and virtualization technologies while building a security mindset (Academy, 2024).

**Asset and Inventory Management:** Gain a working knowledge of the Linux operating system (OS) as you learn knowledge and skills to apply throughout boot camp and your career (Academy, 2024).

**Career Simulation 1:** Put cybersecurity skills to the test as a SOC Analyst 1 for a fictitious company, where you'll work to solve and report a configuration file problem (Academy, 2024).

In addition to mastering the fundamentals, I am set on obtaining the **<a href="https://aws.amazon.com/certification/certified-security-specialty/" target="_blank">AWS Certified Security certification</a>**. This certification will validate my expertise in securing AWS environments and open doors to exciting opportunities in cloud security.

I want to share my progress and learning journey with all of you through this blog. I'll be documenting my experiences, insights, and challenges as I navigate through the world of cybersecurity. Your feedback and suggestions are highly valued, so feel free to share your thoughts via the <a href="https://www.hcoco1.com/contact" target="_blank">contact form</a>.

---

# CAREER SIMULATION 1:
## **Scenario:**



"You're just getting started at StackFull Software. Alice, a Level 2 SOC Analyst, has been assigned as your mentor to help you learn the ropes at your new company. She's educating you on the various business units you'll be working with, such as software engineering, human resources, business development, and of course, information technology (IT). Your department, the cybersecurity department, falls under the IT business unit.

You continue to get more familiar with StackFull Software, thanks to Alice. She lets you know about all of the log files from the various business units that feed into the Splunk SIEM. This includes firewall logs, Windows Event logs, Jira logs, software engineering logs, and so much more. As a cyber professional, this is good practice as it allows SOC analysts to view anything and everything that may be important when it comes to resolving a cyber incident. Proper logging is crucial for handling cyber incidents.

Alice grants you access to Splunk where you can view all of these various logs. Unfortunately, it appears that you were unable to search anything due to some odd configuration issue within Splunk. She establishes an SSH connection to the Splunk server to see what's wrong. 

It looks like James, another Level 1 SOC Analyst has inadvertently changed a configuration file named config.conf that is preventing you from looking at logs. You don’t know exactly where the file is, but you know that Splunk stores all of its files within the /opt/splunk directory. You will need to modify the configuration file so that you can properly view logs within Splunk" (Career Simulation 1, n.d.).


## ** Report:**

## <span style="color:blue"> Executive Summary:

<span style="color:blue">This report outlines resolving a critical issue encountered within StackFull Software's cybersecurity operations, specifically related to a misconfiguration in the `config.conf` file, which impeded access to essential logs within the Splunk SIEM system. The document details the process undertaken to rectify this issue, ensuring the proper functioning of logging for cybersecurity operations. It delineates the steps involved in identifying the problem, locating the `config.conf` file, assessing its permissions, verifying its integrity, and creating a backup. Additionally, recommendations are provided to enhance confidentiality and integrity measures surrounding Splunk configuration files.

<span style="color:blue">The narrative underscores the collaborative efforts and systematic troubleshooting to rectify the issue successfully, restoring functionality to the logging system and enabling SOC analysts to monitor and respond to cyber incidents effectively.Recommendations to enhance the integrity, availability, and confidentiality of the `config.conf` file include:

- <span style="color:blue">Restricting access based on roles and responsibilities
- <span style="color:blue">Conducting regular audits of file permissions
- <span style="color:blue">Encrypting configuration files
- <span style="color:blue">Incorporate tools for automation, such as cron jobs, to automate recurring tasks.
- <span style="color:blue">Regularly backing up configuration files.


## Introduction:

This report explains how we addressed a significant issue in StackFull Software's cybersecurity operations. The problem derived from a misconfiguration in the config.conf file, which obstructed access to crucial logs within the Splunk SIEM system. The primary purpose of this report is to detail the resolution process, ensuring effective logging functionality for cybersecurity purposes. It covers the stages of a digital forensics investigation, such as acquisition, preservation, analysis, and presentation, alongside recommendations for enhancing confidentiality and integrity measures related to Splunk configuration files.

## Body:
Upon encountering the access issue in Splunk, a SOC Analyst was promptly informed of the situation and guided in resolving the problem. Following the standard phases of digital forensics investigation, the process of managing the misconfiguration in the configuration.conf file was initiated.

**Stage Identification:**
The first step in a digital forensics investigation is to identify the devices and resources containing the data that will be a part of the investigation (Gonzalez, 2022).

With Splunk storing its files within the /opt/splunk directory, the first step was to locate the config.conf file (Figure 1). Basic file navigation commands were utilized to navigate to the specified directory and confirm the presence of the file. This initial step ensured accurate file identification, which is crucial for precise modifications.


```bash
fstack@:~$ find /opt/splunk/ -name "config.conf"
/opt/splunk/etc/system/local/config.conf
```
<small>**Fig.1** Command to locate the `config.conf` file (find)</small>



Subsequently, an assessment of the file permissions of config.conf was conducted using the ls -l command (Figure 2). The output revealed the permissions as 777, indicating full permissions for the file's owner, group, and others. This information provided insights into potential issues affecting its integrity (Principle of least privileges).

```bash
fstack@~$ cd /opt/splunk/etc/system/local; ls -l
-rwxrwxrwx 1 root root 238 Feb 16:59 config.conf
```
<small>**Fig.2** Commands to list the `config.conf` file (cd, ls -l)</small>

Ensuring the file's integrity, the md5sum command was employed to calculate and record the MD5 hash value of config.conf. This served as a baseline for comparison after making modifications to the file, enabling verification of the integrity of changes made.

```bash
fstack@:/opt/splunk/etc/system/local$ md5sum config.conf 
ad1f9b6cbcee6cd3efa6438149db5c1c  config.conf
```
<small>**Fig.3** Command to hash the `config.conf` file (md5sum)</small>


**Stage  Analysis:**

Once the devices involved have been identified and isolated, and the data has been duplicated and stored securely, digital forensic investigators use various techniques to extract relevant data and examine it, searching for clues or evidence that points to wrongdoing (Gonzalez, 2022).

With a clear understanding of the file's location, permissions, and integrity status, the process to edit the config.conf file was undertaken. The Vim text editor was used to append the configuration lines (Figure 2. [admin]: AliceAdmin1 & IvanAdmin2) to enable proper logging functionality within the Splunk server. 


```bash
fstack@:/opt/splunk/etc/system/local$ vim config.conf
[inputs]
 - Windows logs
 - Firewall logs
 - Jira logs
 - Software engineering logs
 - IPS logs
 - IDS logs
 - WAF logs

[viewers]
 - Emily
 - Neel
 - James
 - Riley
 - Sara

# Configuration lines added
[admin]             
   ─ AliceAdmin1
   ─ IvanAdmin2
```
<small>**Fig.4** Command to edit the `config.conf` file (vim)</small> 

Following the editing process, another round of MD5 hash verification confirmed the integrity of the modified config.conf file, validating that the modifications were successfully applied without unintended alterations (Figure 5).

```bash
fstack@:/opt/splunk/etc/system/local$ md5sum config.conf 
46dfaf406b12c9d1ca9b293660c2939b  config.conf
```
<small>**Fig.5** Command to hash the `config.conf` file (md5sum)</small>

**Stage  Preservation:**

After the devices involved in an investigation have been seized and stored in a secure location, the digital forensics investigator or forensics analyst uses forensic techniques to extract any data that may be relevant to the investigation and stores it securely. This phase can involve the creation of a digital copy of the relevant data, which is known as a “forensic image.”(Gonzalez, 2022)

As a precautionary measure, a backup of the edited config.conf file was created by copying the file to the /home/fstack directory (Figure 6). This action ensured the preservation of the modified file for future reference or restoration purposes, providing an additional layer of security and risk mitigation.


```bash
fstack@~$ sudo tar -cJf /home/fstack/config.conf.tar.xz config.conf
fstack@~$ ls -l /home/fstack
drwxr-xr-x  2 fstack fstack   4096 Aug 31  2022  Music
drwxr-xr-x  2 fstack fstack   4096 Aug 31  2022  Pictures
drwxr-xr-x  2 fstack fstack   4096 Aug 31  2022  Public
drwxr-xr-x  2 fstack fstack   4096 Aug 31  2022  Templates
drwxr-xr-x  2 fstack fstack   4096 Aug 31  2022  Videos
-rw-rw-r--  1 fstack fstack   1032 Jan 31 06:12  auditd.enable
-rw-r--r--  1 root   root      320 Feb 19 03:12  config.conf.tar.xz
```
<small>**Fig.6** Commands to backup and list the config.conf file (tar, ls -l)</small>

## <span style="color:green">Conclusion:
 <span style="color:green">The issue with accessing logs within the Splunk server was resolved through collaborative efforts and systematic troubleshooting. The modifications made to the config.conf file restored functionality to the logging system, aligning with the objectives of the digital forensics investigation stages. 
 
 <span style="color:green">This document details the steps undertaken to identify and resolve the access issue within the Splunk system, explicitly targeting the misconfiguration present in the config.conf file. By documenting the acquisition, preservation, analysis, and presentation stages of digital forensics, it offers a comprehensive record of the investigative process.

## Suggestions:

To enhance the integrity, availability, and confidentiality of the config.conf file, the following suggestions can be applied:

- Restrict access to the config.conf file based on roles and responsibilities within the organization. Limit access to only authorized personnel who require it for their job functions. This helps prevent unauthorized modifications and ensures only relevant individuals can change the configuration.

- Create a cron job to check and ensure the integrity of the config.conf periodically using the md5sum command.

    ```bash
    # Open the crontab editor
    crontab -e
    # Add the following line to the crontab file to run the integrity check every day at 2 AM
    0 2 * * * md5sum /opt/splunk/etc/system/local/config.conf > /var/log/config_checksum.log
    ```


- Create a cron job to schedule regular backups of the config.conf file to ensure data redundancy and availability.

    ```bash
    # Open the crontab editor
    crontab -e
    # backup
    0 0 * * * tar -czf /backup/config_backup_$(date +\%Y\%m\%d).tar.gz /opt/splunk/etc/system/local/config.conf
    ```




- Regularly Audit File Permissions: Conduct regular audits of file permissions to ensure they adhere to the principle of least privilege. Review and adjust permissions as necessary to restrict access to the config.conf file to only those individuals who require it for their job roles. This helps mitigate the risk of unauthorized access and modifications.


- Encrypt Configuration Files: Encrypt the config.conf file to protect sensitive information stored within it. Encryption ensures that even if unauthorized individuals gain access to the file, they cannot decipher its contents without the proper decryption key. This helps safeguard confidential data and maintains the confidentiality of the configuration settings.

---

## **References:**

Academy, F. (2024, February 22). Cybersecurity Bootcamp. Fullstack Academy. https://www.fullstackacademy.com/programs/cybersecurity-bootcamp

Gonzalez, S. 2022, August 26. What are the 5 stages of a digital forensics investigation? - Cybersecurity | Digital Forensics | Penetration testing | ERMProtect. https://ermprotect.com/blog/what-are-the-5-stages-of-a-digital-forensics-investigation/.

What is the CIA Triad and Why is it important? | Fortinet. (n.d.). Fortinet. https://www.fortinet.com/resources/cyberglossary/cia-triad


What is the principle of least privilege? | Cloudflare. (n.d.). Cloudflare. https://www.cloudflare.com/learning/access-management/principle-of-least-privilege/


McBrien, S. (2023, January 12). Linux file permissions explained. Enable Sysadmin. https://www.redhat.com/sysadmin/linux-file-permissions-explained

---