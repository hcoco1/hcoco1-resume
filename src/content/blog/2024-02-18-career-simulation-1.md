---
title:  "Cyber Incident Response"
description: "This report outlines resolving a critical issue encountered within StackFull Software's cybersecurity operations...."
pubDate: "Feb 18 2024"
heroImage: "https://images.unsplash.com/photo-1660644807804-ffacfd7a4137?auto=format&fit=crop&w=927&h=927"
badge: "Career Simulation 1"
tags: ["linux","cybersecurity"]

---
## Scenario

"You're just getting started at StackFull Software. Alice, a Level 2 SOC Analyst, has been assigned as your mentor to help you learn the ropes at your new company. She's educating you on the various business units you'll be working with, such as software engineering, human resources, business development, and of course, information technology (IT). Your department, the cybersecurity department, falls under the IT business unit.

You continue to get more familiar with StackFull Software, thanks to Alice. She lets you know about all of the log files from the various business units that feed into the Splunk SIEM. This includes firewall logs, Windows Event logs, Jira logs, software engineering logs, and so much more. As a cyber professional, this is good practice as it allows SOC analysts to view anything and everything that may be important when it comes to resolving a cyber incident. Proper logging is crucial for handling cyber incidents.

Alice grants you access to Splunk where you can view all of these various logs. Unfortunately, it appears that you were unable to search anything due to some odd configuration issue within Splunk. She establishes an SSH connection to the Splunk server to see what's wrong. 

It looks like James, another Level 1 SOC Analyst has inadvertently changed a configuration file named config.conf that is preventing you from looking at logs. You don’t know exactly where the file is, but you know that Splunk stores all of its files within the /opt/splunk directory. You will need to modify the configuration file so that you can properly view logs within Splunk" (Career Simulation 1, n.d.).

## Executive Summary:

This report outlines resolving a critical issue encountered within StackFull Software's cybersecurity operations, specifically related to a misconfiguration in the `config.conf` file, which impeded access to essential logs within the Splunk SIEM system. The document details the process undertaken to rectify this issue, ensuring the proper functioning of logging for cybersecurity operations. It delineates the steps involved in identifying the problem, locating the `config.conf` file, assessing its permissions, editing it, verifying its integrity, and creating a backup. Additionally, recommendations are provided to enhance confidentiality and integrity measures surrounding Splunk configuration files.

The narrative underscores the collaborative efforts and systematic troubleshooting to rectify the issue successfully, restoring functionality to the logging system and enabling SOC analysts to monitor and respond to cyber incidents effectively.
Recommendations to enhance the integrity, availability, and confidentiality of the `config.conf` file include:
- Restricting access based on roles and responsibilities,
- Conducting regular audits of file permissions,
- Encrypting configuration files,
- Deploying a File Integrity Monitoring tool, and
- Regularly backing up configuration files.


## Introduction:

This report provides a comprehensive overview of the steps to address a critical issue encountered within StackFull Software's cybersecurity operations. The problem at hand involved a misconfiguration within the config.conf file, hindering access to essential logs within the Splunk SIEM system. The primary objective of this report is to document the process of resolving this issue, ensuring proper logging functionality for cybersecurity operations. The report's scope encompasses identifying the problem, outlining the steps to address it, and providing recommendations for improving confidentiality and integrity measures surrounding Splunk configuration files.

## Body:
Upon encountering the access issue in Splunk, a SOC Analyst was promptly informed of the situation and guided in resolving the problem. Understanding the critical importance of proper logging for cybersecurity operations, the process to address the misconfiguration in the config.conf file was initiated.
With Splunk storing its files within the /opt/splunk directory, the first step was to locate the config.conf file (Figure 1). Basic file navigation commands were utilized to navigate to the specified directory and confirm the presence of the file. This initial step ensured accurate file identification, which is crucial for precise modifications.

```bash
fstack@:~$ find /opt/splunk/ -name "config.conf"
/opt/splunk/etc/system/local/config.conf
```
###### **Fig.1** Command to locate the `config.conf` file (find)



Subsequently, an assessment of the file permissions of config.conf was conducted using the ls -l command (Figure 2). The output revealed the permissions as 777, indicating full permissions for the file's owner, group, and others. This information provided insights into potential issues affecting its integrity (Principle of least privileges).

```bash
fstack@~$ cd /opt/splunk/etc/system/local; ls -l
-rwxrwxrwx 1 root root 238 Feb 16:59 config.conf
```
###### **Fig.2** Commands to list the `config.conf` file (cd, ls -l)

To ensure the file's integrity, the md5sum command was employed to calculate and record the MD5 hash value of config.conf. This served as a baseline for comparison after making modifications to the file, enabling verification of the integrity of changes made.

```bash
fstack@:/opt/splunk/etc/system/local$ md5sum config.conf 
ad1f9b6cbcee6cd3efa6438149db5c1c  config.conf
```
###### **Fig.3** Command to hash the `config.conf` file (md5sum)

With a clear understanding of the file's location, permissions, and integrity status, the process to edit the config.conf file was undertaken. The Vim text editor was used to append the configuration lines: **[admin]: AliceAdmin1 & IvanAdmin2** to enable proper logging functionality within the Splunk server. 

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
~                                                                                         
~
```
###### **Fig.4** Command to edit the `config.conf` file (vim) 

Following the editing process, another round of MD5 hash verification confirmed the integrity of the modified config.conf file, validating that the modifications were successfully applied without unintended alterations (Figure 5).

```bash
fstack@:/opt/splunk/etc/system/local$ md5sum config.conf 
46dfaf406b12c9d1ca9b293660c2939b  config.conf
```
###### **Fig.5** Command to hash the `config.conf` file (md5sum)

As a precautionary measure, a backup of the edited config.conf file was created by copying it to the /home/fstack directory (Figure 6). This ensured the preservation of the modified file for future reference or restoration purposes, providing an additional layer of security and risk mitigation.

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
###### **Fig.6** Commands to backup and list the config.conf file (tar, ls -l)

## Conclusion:
The issue with accessing logs within the Splunk server was resolved through collaborative efforts and systematic troubleshooting. The modifications made to the `config.conf` file restored functionality to the logging system, empowering SOC analysts to monitor and respond to cyber incidents effectively. 

This document is critical for the investigation conducted on the Splunk server at StackFull Software. It outlines the steps taken to identify and resolve the access issue within the Splunk system, focusing on the misconfiguration found in the `config.conf` file.

The report provides a comprehensive investigation record, giving valuable insights into problem-solving and actionable recommendations for future enhancements. It demonstrates the dedication and expertise of the cybersecurity team in addressing and mitigating cybersecurity challenges effectively

## Suggestions:

To enhance the integrity, availability, and confidentiality of the `config.conf` file, the following suggestions can be applied:

1.-  Restrict access to the `config.conf` file based on roles and responsibilities within the organization. Limit access to only authorized personnel who require it for their job functions. This helps prevent unauthorized modifications and ensures only relevant individuals can change the configuration.


2.- Regularly Audit File Permissions: Conduct regular audits of file permissions to ensure they adhere to the principle of least privilege. Review and adjust permissions as necessary to restrict access to the `config.conf` file to only those individuals who require it for their job roles. This helps mitigate the risk of unauthorized access and modifications.


3.- Encrypt Configuration Files: Encrypt the `config.conf` file to protect sensitive information stored within it. Encryption ensures that even if unauthorized individuals gain access to the file, they cannot decipher its contents without the proper decryption key. This helps safeguard confidential data and maintains the confidentiality of the configuration settings.


4.- Deploy a File Integrity Monitoring (FIM) tool to monitor changes to the `config.conf` file in real-time. FIM solutions can detect unauthorized modifications, tampering, or deletions of the file and alert administrators immediately. This allows for prompt investigation and remediation of any suspicious activities, helping maintain the integrity and availability of the configuration file.


5.- Regularly Back Up Configuration Files: Establish a regular backup schedule for the `config.conf` file to ensure that copies of the file are available in case of accidental deletion, corruption, or other unforeseen events. Store backups in secure locations and test restoration procedures periodically to verify their effectiveness. This helps ensure the availability and recoverability of the configuration settings in the event of data loss or system failure.


## References:

Fullstack Academy. Career Simulation 1. (n.d.). https://fullstack.instructure.com/courses/838/assignments/46994?module_item_id=301399


Fortinet. What is the CIA Triad and Why is it important? | Fortinet. (n.d.).  https://www.fortinet.com/resources/cyberglossary/cia-triad


Cloudflare. What is the principle of least privilege? | Cloudflare. (n.d.).  https://www.cloudflare.com/learning/access-management/principle-of-least-privilege/


McBrien, S. (2023, January 12). Linux file permissions explained. Enable Sysadmin. Linux file permissions explained | Enable Sysadmin
