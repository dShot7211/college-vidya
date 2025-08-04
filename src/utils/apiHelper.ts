/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "./apiEndPoints";

type ApiCallParams = {
  method?: "get" | "post" | "put" | "delete" | "patch";
  apiEnd?: string;
  data?: any;
  setLoading?: (loading: boolean) => void;
  query?: any;
  responseType?: InternalAxiosRequestConfig["responseType"];
};

export const apiCallMultipart = async ({
  method = "post",
  apiEnd = "",
  data = {},
  setLoading = () => {},
  query = {},
}: ApiCallParams): Promise<{
  res?: AxiosResponse;
  error?: unknown;
}> => {
  const formData = new FormData();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }

  setLoading(true);

  try {
    const res = await axios[method](BASE_URL.main + apiEnd, formData, {
      params: query,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setLoading(false);
    return { res };
  } catch (error: unknown) {
    console.error("Error from axios util:", error);
    setLoading(false);
    return { error };
  }
};

//
const res = {
  prospectus_link:
    "https://d1aeya7jd2fyco.cloudfront.net/upload_file/IIMK-EPGP-MBA-17-Brochure_revised.pdf",
  pros_modal: "",
  eligibility_modal:
    "<ul>\r\n\t<li>Bachelor&rsquo;s degree with a minimum of 50% marks (CA/ICWA/CS qualifications also accepted) and at least 3 years of work experience after graduation.</li>\r\n</ul>",
  other_lsq: 0,
  course_cards: [],
  upload_syllabus:
    "https://d1aeya7jd2fyco.cloudfront.net/syllabus/IIMK-EPGP-MBA-17-Brochure_revised.pdf",
  fee_breakup_note:
    "<p><strong>Application Fee:</strong>&nbsp;₹2,000 is payable at the time of applying* online. Application fee remitted is not refundable nor adjustable under any circumstances. (<i>*Applications received without payment of application fee will be rejected.)</i></p>\r\n\r\n<p><strong>Programme Fee: </strong>The non-refundable program fee is <strong>₹15,95,000</strong>, payable in 7 installments throughout the program.</p>",
  api_found: "Yes",
  name: "IIM Kozhikode",
  cashback_amount: null,
  fee: 1595000,
  full_fee_usd: null,
  avg_rating: 0,
  courses_fee_details: [
    {
      id: 2139,
      fee_type: {
        fee_type: "Full Fees (internally)",
      },
      fee: "1595000",
      priority: 0,
      status: 1,
      universities_courses: 834,
    },
    {
      id: 2559,
      fee_type: {
        fee_type: "Application Fee (Non-refundable)",
      },
      fee: "2000",
      priority: 0,
      status: 1,
      universities_courses: 834,
    },
  ],
  courses_fee_usd_details: [],
  custom_tags: null,
  university_dynamic_tag_color: null,
  review_universities_courses: [],
  university: {
    id: 313,
    universities_faqs: [
      {
        id: 1606,
        title: "What are IIMK’s executive postgraduate programs?",
        content:
          "<p>In the pursuit of making the Indian workforce equipped with all the latest trends &amp; technologies, the Indian Institute of Management Kozhikode has introduced executive postgraduate programs (EPGP). These are short-term programs &amp; are majorly focused on deve6:04loping a practical understanding of the topics.</p>",
        status: 1,
        universities: 313,
      },
      {
        id: 1607,
        title:
          "What is the world ranking of IIM Kozhikode’s executive postgraduate programs?",
        content:
          "<p>As per the QS World Executive Ranking of 2022, IIM Kozhikode falls in a band of above 171 rankings.</p>",
        status: 1,
        universities: 313,
      },
      {
        id: 1608,
        title: "What is the placement rate of IIM Kozhikode?",
        content:
          "<p>The placement rate at the Indian Institute of Management Kozhikode is 100%. With the strong networking of the university with institutions &amp; industries, this placement rate is achieved for almost every batch of students.</p>",
        status: 1,
        universities: 313,
      },
      {
        id: 1609,
        title:
          "Is an online certification program from IIM Kozhikode worth it?",
        content:
          "<p>The Indian Institute of Management Kozhikode has ranked 3rd in the NIRF 2024 rankings. With its global reputation &amp; industry-relevant curriculum, the courses of the university, both online &amp; offline modes, are well-recognized.</p>",
        status: 1,
        universities: 313,
      },
      {
        id: 1610,
        title:
          "What is the salary package I can expect after completing a management course from IIM Kozhikode?",
        content:
          "<p>The highest salary package for the academic batch of 2021-2023 at IIM Kozhikode was 67.02 LPA offered by an IT company. The average salary of this batch was in the range of 30-32 LPA.</p>",
        status: 1,
        universities: 313,
      },
      {
        id: 1611,
        title: "What is the main USP of IIM Kozhikode?",
        content:
          "<p>The blended or hybrid mode of learning is the main USP of IIMK as it was the first Asian institute to introduce this learning module for working executives in the management field.</p>",
        status: 1,
        universities: 313,
      },
      {
        id: 1612,
        title:
          "Who are the beneficiaries of the scholarships at IIM Kozhikode?",
        content:
          "<p>At the Indian Institute of Management Kozhikode, scholarship programs are offered in the following categories: Merit-based, Financial Need-based, specially-abled, Defence/Army personnel, reserved category candidates, &amp; others satisfying the government schemes of scholarships.</p>",
        status: 1,
        universities: 313,
      },
      {
        id: 1613,
        title: "What are some best online executive programs in India?",
        content:
          '<p>Universities have launched numerous online executive courses to empower the Indian workforce. The top ones on that list are tabulated below.</p>\r\n\r\n<div class="table-responsive">\r\n<table style="border:none; border-collapse:collapse" width="100%">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td colspan="2" style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2; text-align:center"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">Explorer Best Executive Programs In India</span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-finance/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Finance</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-human-resource/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In HR</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-operations/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Operations</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-leadership/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Leadership</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-epg-diploma-certificate-data-science-analytics/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Data Science and Analytics</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-ai-machine-learning/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In AI and Machine Learning</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-marketing/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Marketing</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-epg-diploma-certificate-software-tech/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Software and Technology</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-healthcare/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Healthcare</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-business-analytics/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Business Analytics</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-devops/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">Executive Program Online In DevOps</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-cyber-security/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Cyber Security</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-big-data-analytics/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Bigdata Engineering</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-blockchain/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Blockchain</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-pg-diploma-certificate-cloud-computing/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive Program Online In Cloud Computing</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/llm-online/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">LLM Online</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/job-guarantee-program/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Job Linked Programs</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/pay-after-placement/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Pay After Placement Programs</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:295px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses-online/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">Explore more online and distance courses In India!</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:296px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/universities/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">Click here for all approved distance and online universities in India!</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>',
        status: 1,
        universities: 313,
      },
      {
        id: 1614,
        title: "Can I pursue a doctorate program while working?",
        content:
          '<p>Several online doctorate courses have been launched in the market for working professionals. A few of them include:</p>\r\n\r\n<div class="table-responsive">\r\n<table style="border:none; border-collapse:collapse" width="100%">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td colspan="2" style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:301px">\r\n\t\t\t<p style="line-height:1.2; text-align:center"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">Explore Online Doctorate Programs for Working Professionals</span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:301px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/doctoral-degree-phd-online/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Online Doctorate Course for Working Professionals</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:290px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/doctoral-degree-phd-online/doctor-of-Juridical-science-sjd/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Doctor of Juridical Science</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:301px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/doctoral-degree-phd-online/dba-in-supply-chain/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">DBA In Supply Chain Management</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:290px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/doctoral-degree-phd-online/dba-in-artificial-intelligence/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">DBA In Supply Artificial Intelligence</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:301px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/doctoral-degree-phd-online/dba-in-human-resource/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">DBA In Human Resource Management</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; background-color:#ffffff; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:290px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/doctoral-degree-phd-online/doctor-of-business-administration/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Doctor of Business Administration</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>',
        status: 1,
        universities: 313,
      },
      {
        id: 1615,
        title: "Can I pursue an MBA without a good CAT score?",
        content:
          '<p>Top management institutions in India including IIMs are now offering online MBAs for which you do not need to attempt CAT. Some of these trending MBA options are listed below.</p>\r\n\r\n<div class="table-responsive">\r\n<table style="border:none; border-collapse:collapse" width="100%">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td colspan="2" style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2; text-align:center"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><span style="font-size:12pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Poppins,sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">MBA without CAT Available!</span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-global-mba/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">MBA Global Online</span></span></span></span></span></span></a></span></span></td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/mba-for-working-professionals/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">MBA for Working Professionals</span></span></span></span></span></span></a></span></span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-mba/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">MBA Courses Online</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/mba-distance-education/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">MBA Distance Learning Course</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/online-executive-mba/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Online Executive MBA</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/part-time-mba/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">MBA Part-Time Courses</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan="2" style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height: 1.2; text-align: center;"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/executive-mba-for-working-professionals/" style="text-decoration:none"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Executive MBA for Working Professionals</span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>',
        status: 1,
        universities: 313,
      },
      {
        id: 1616,
        title:
          "Which top IIMs offer online management courses other than IIM Kozhikode?",
        content:
          '<p>Here is a list of the top IIMs as per NIRF 2024 Management category which offer different types of online management courses.</p>\r\n\r\n<div>\r\n<table style="border:none; border-collapse:collapse; table-layout:fixed; width:624px" width="NaN">\r\n\t<colgroup>\r\n\t\t<col />\r\n\t\t<col />\r\n\t</colgroup>\r\n</table>\r\n\r\n<table style="border:none; border-collapse:collapse" width="100%">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td colspan="3" style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2; text-align:center"><strong>Top IIMs In India As Per NIRF Ranking 2024</strong></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">Name</span></span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">Rank</span></span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><span style="font-size:11pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">Score</span></span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-ahmedabad/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Ahmedabad</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">1</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">83.32</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-amritsar/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Amritsar</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">47</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">52.57</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-bangalore/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Bangalore</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">2</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">81.16</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-jammu/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Jammu</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">42</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">54.64</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-kashipur/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Kashipur</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">23</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">60.82</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-kozhikode/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Kozhikode</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">3</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">77.90</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-lucknow/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Lucknow</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">7</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">74.43</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-nagpur/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Nagpur</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">31</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">56.94</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-raipur/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Raipur</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">14</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">64.40</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-ranchi/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Ranch</span></span></span></span></span></span></span></a><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#484848"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">i</span></span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">17</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">61.27</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-rohtak/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Rohtak</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">12</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">66.49</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-sambalpur/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Sambalpur</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">50</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">51.47</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-shillong/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Shillong</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">24</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">60.49</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-sirmaur/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Sirmaur</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">57</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">50.92</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-udaipur/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Udaipur</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">22</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">60.93</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/university/iim-visakhapatnam/" style="text-decoration:none"><span style="font-size:10.5pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="background-color:#ffffff"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:none">Indian Institute of Management Visakhapatnam</span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">26</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000" width="NaN">59.20</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>',
        status: 1,
        universities: 313,
      },
    ],
    approval_details: [
      {
        id: 11,
        title: "WES",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/approvals/wes-logo.jpg",
        status: 1,
        priority: 6,
        accreditation_description: null,
      },
      {
        id: 17,
        title: "AACSB",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/approvals/aacsb-association-to-advance-collegiate-schools-of-business.webp",
        status: 1,
        priority: 12,
        accreditation_description: null,
      },
      {
        id: 21,
        title: "AMBA",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/approvals/AMBA.jpg",
        status: 1,
        priority: 16,
        accreditation_description: null,
      },
      {
        id: 26,
        title: "EQUIS",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/approvals/EQUIS.jpg",
        status: 1,
        priority: 21,
        accreditation_description: null,
      },
    ],
    universities_pros_cons: [
      {
        id: 463,
        content: "Pioneer of inter-active programs in Asia",
        status: 1,
        universities_pros_cons_title: 1,
        universities: 313,
      },
      {
        id: 464,
        content: "Incubation Centre for Excellence",
        status: 1,
        universities_pros_cons_title: 1,
        universities: 313,
      },
    ],
    books_lms: [],
    reviews: [
      {
        id: 1729,
        register: {
          name: "Shreya ",
        },
        reviews_reply: [],
        reviews_images: [],
        content:
          "Everybody is aware of the brand that IIM is and how not anybody and everybody can study there. The online certificate programs by IIM Kozhikode is an amazing opportunity for those who wish to study at IIM but can’t get through via CAT as you get the chance to learn from the IIM faculty.",
        name: null,
        course: null,
        specializations: null,
        rating: 5,
        helpful: 0,
        created_date_time: "2024-01-27T13:12:28.543360Z",
        status: 1,
        universities: 313,
      },
      {
        id: 1728,
        register: {
          name: "Pinki Mishra ",
        },
        reviews_reply: [],
        reviews_images: [],
        content:
          "It had always been my dream to study at IIM, but wasn’t able to get through as of course it isn’t an easy task. However, while I was working I got to know about the certificate programme in HRM offered by IIM Kozhikode through upGrad. The online certificate program was really good and helpful. After completing my certificate, I was able to get a promotion and a decent hike in my salary as well. So, it really is a great program!",
        name: null,
        course: null,
        specializations: null,
        rating: 5,
        helpful: 0,
        created_date_time: "2024-01-27T13:11:47.735153Z",
        status: 1,
        universities: 313,
      },
      {
        id: 1727,
        register: {
          name: "Akshay",
        },
        reviews_reply: [],
        reviews_images: [],
        content:
          "At IIM Kozhikode, one of the best things is the panel of faculty members. I am glad that I decided on joining this institute for my MBA. The academic support I got from my professors is above all expectations. Moreover, the guest faculty members enlightened me about the career prospects I can get after my course.",
        name: null,
        course: null,
        specializations: null,
        rating: 4,
        helpful: 0,
        created_date_time: "2024-01-27T13:11:22.673085Z",
        status: 1,
        universities: 313,
      },
      {
        id: 1726,
        register: {
          name: "Khushi gaur",
        },
        reviews_reply: [
          {
            id: 620,
            register: "Vikash Singh",
            content: "Mera loan complete Kyon Nahin ho raha hai",
            cv_reply: 0,
            created_date_time: "2025-07-07T13:28:07.099694Z",
            reviews: 1726,
          },
        ],
        reviews_images: [],
        content:
          "The tag of being an IIM Kozhikode alumni has benefited me in the most possible ways. The understanding of the concepts I developed from the course content & professors at the university has made me jumpstart my professional career in quite an impactful way. The training & workshops have helped me come out as a confident professional.",
        name: null,
        course: null,
        specializations: null,
        rating: 4,
        helpful: 0,
        created_date_time: "2024-01-27T13:11:04.790314Z",
        status: 1,
        universities: 313,
      },
      {
        id: 1725,
        register: {
          name: "Jyoti Kumari",
        },
        reviews_reply: [],
        reviews_images: [],
        content:
          "Before enrolling myself at the university I was very scared about staying at the hostel and my biggest fear was the food and the infrastructure of the hostel this university is an exception and the canteen quality is amazing and but there is little area for improvement.",
        name: null,
        course: null,
        specializations: null,
        rating: 4,
        helpful: 1,
        created_date_time: "2024-01-27T13:10:41.846798Z",
        status: 1,
        universities: 313,
      },
    ],
    universities_facts: [
      {
        id: 2096,
        content:
          "The university was established in 1996 by the Govt. of India in association with the State Government of Kerala.",
        status: 1,
        universities: 313,
      },
      {
        id: 2097,
        content:
          "It is one of the few business education institutions to have received the accreditations from bodies such AMBA, EQUIS and ARIIA.",
        status: 1,
        universities: 313,
      },
      {
        id: 2098,
        content:
          "One of the best management institutions in India renowned for producing the finest management professionals.",
        status: 1,
        universities: 313,
      },
      {
        id: 2099,
        content:
          "The university ranked in 3rd position in the management category in NIRF.",
        status: 1,
        universities: 313,
      },
      {
        id: 2100,
        content:
          "The courses of the university are well-recognized in the industry as it is accredited by AMBA, EQUIS, WES, and AACSB.",
        status: 1,
        universities: 313,
      },
      {
        id: 2101,
        content:
          "The university was listed in 2nd position in the Atal Ranking of Institutions on Innovation Achievements (ARIIA) in 2021 for its innovative & updated course structures.",
        status: 1,
        universities: 313,
      },
      {
        id: 2102,
        content:
          "The online management certifications/programs of the university hold the same weightage as an on-campus certification course at the Global level.",
        status: 1,
        universities: 313,
      },
      {
        id: 2103,
        content:
          "The workshops, case studies, & preplacement talks organized by the university will make you groom professionally by acquiring a confident & impactful personality.",
        status: 1,
        universities: 313,
      },
      {
        id: 2104,
        content:
          "The panel of industry experts & faculty members not only impacts the theoretical understanding but organizes some skillful training programs on analytical tools for your practical upgradation in the field.",
        status: 1,
        universities: 313,
      },
      {
        id: 2105,
        content:
          "A 24*7 technical support team of the university ensures a smooth digitized learning journey for you.",
        status: 1,
        universities: 313,
      },
      {
        id: 2106,
        content:
          "A globally recognized certificate/ diploma/ degree earned at the end of the course from IIM Kozhikode widens your career opportunities in domestic as well as foreign industries.",
        status: 1,
        universities: 313,
      },
    ],
    topslider: [
      {
        id: 333,
        university_slider:
          "https://d1aeya7jd2fyco.cloudfront.net/slider/iim-kozhikode-top-university.webp",
        status: 1,
        universities: 313,
      },
    ],
    placement_partner_logo: [
      {
        id: 13,
        title: "American Express",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/american-express.webp",
        status: 1,
      },
      {
        id: 25,
        title: "Cognizant",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/cognizant.webp",
        status: 1,
      },
      {
        id: 27,
        title: "Deloitte",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/deloitte.webp",
        status: 1,
      },
      {
        id: 45,
        title: "Infosys",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/infosys.webp",
        status: 1,
      },
      {
        id: 49,
        title: "ISRO",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/isro.webp",
        status: 1,
      },
      {
        id: 50,
        title: "ITC",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/itc.webp",
        status: 1,
      },
      {
        id: 55,
        title: "KPMG",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/kpmg.webp",
        status: 1,
      },
      {
        id: 63,
        title: "Nestle",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/nestle.webp",
        status: 1,
      },
      {
        id: 66,
        title: "NTT Data",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/ntt-data.webp",
        status: 1,
      },
      {
        id: 79,
        title: "Tata",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/tata.webp",
        status: 1,
      },
      {
        id: 86,
        title: "Wipro",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/wipro.webp",
        status: 1,
      },
      {
        id: 108,
        title: "CocaCola",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/CocaCola.webp",
        status: 1,
      },
      {
        id: 111,
        title: "Apple",
        logo: "https://d1aeya7jd2fyco.cloudfront.net/placement_partners/apple.webp",
        status: 1,
      },
    ],
    student_choice: 0.0002694756115342945,
    cv_rating: "4.4",
    universty_cards: [],
    ptu_count: 2480,
    university_faculty: [],
    name: "IIM Kozhikode",
    slug: "iim-kozhikode-timespro",
    meta_title: "IIM Kozhikode: Online Courses, Fees, Working Professionals",
    meta_description:
      "The Indian Institute of Management Kozhikode is offering online programs designed specifically for working professionals. Click here to learn more!",
    canonical_tag: "https://collegevidya.com/university/iim-kozhikode/",
    priority: 301,
    logo: "https://d1aeya7jd2fyco.cloudfront.net/logo/iim-kozhikode-with-timespro.webp",
    university_number: null,
    about:
      '<p>The Indian Insitute of Management Kozhikode (IIMK) was established in 1996 in the Calicut city of Kerala, India. It is one of the prestigious management schools in India &amp; is striving to deliver a standard quality of education in the same field via online learning programs. In this direction, the university has introduced several short-term online certificate courses for executives.</p>\r\n\r\n<p>The courses available at the IIM Kozhikode, both online &amp; offline modes, are accredited by a UK-based Association of MBAs (AMBA), EQUIS, &amp; WES. It is a member of the Association to Advance Collegiate Schools of Business (AACSB). Moreover, the university ranked 3rd in the National Institutional Ranking Framework (NIRF) in 2024.</p>\r\n\r\n<p>The course structures of the programs available at IIMK are designed by a highly professional team of faculty members &amp; experts who understand the industry trends closely. With this experience-rich &amp; industry-relevant knowledge of the topics, candidates can excel not just in their academic field but also in their professional journey. The 2nd position in the Atal Ranking of Institutions on Innovation Achievements (ARIIA) in 2021 reflects IIMK&rsquo;s innovative approach to learning &amp; its impact on society.</p>\r\n\r\n<div class="table-responsive">\r\n<table style="border:none; border-collapse:collapse" width="100%">\r\n\t<colgroup>\r\n\t\t<col width="372" />\r\n\t\t<col width="363" />\r\n\t</colgroup>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td colspan="2" style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2; text-align:center"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><span style="font-weight:700"><span style="font-style:normal"><span style="text-decoration:none">Top Course from IIMs!</span></span></span></span></span></span></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Courses Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/online-mba/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Online MBA</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/executive-mba/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Executive MBA</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-for-working-professionals/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Online Certificate Courses</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-data-science-analytics/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Data Science and Analytics Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-digital-marketing-analytics/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Digital Marketing and Analytics Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-project-management/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Project Management Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-finance/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Financial Management Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-human-resource/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Human Resource Management Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-leadership-management/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Leadership and Management Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-operations/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Operations and Six Sigma Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/chief-business-officer/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Chief Business Officer Online Course</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-financial-data-analytics/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Financial Data Analytics Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-sales-and-marketing/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Marketing and Sales Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/hostptal-and-healthcare-management/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Hospital and Healthcare Management Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/digital-transformation-and-innovation/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Digital Transformation and Innovation Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/advanced-business-analytics/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Business Analytics Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/blockchain-and-fintech/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Blockchain and Fintech Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/public-policy-management/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Public Policy Management Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/chief-marketing-officer/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM CMO Course Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/chief-finance-officer/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM CFO Course Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/financial-services-and-capital-markets/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Financial Services and Capital Markets Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/investment-banking-and-capital-markets/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Investment Banking and Capital Markets Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/artificial-intelligence-machine-learning/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM AI and Machine Learning Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/chro-chief-human-resources-officer/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Chief HR Officer Online Course</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/chief-operations-officer/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Chief Operations Officer Online Course</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/chief-executive-officer/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Chief Executive Officer Online Course</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t\t<td style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:363px">\r\n\t\t\t<p style="line-height:1.2"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/general-management/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM General Management Course Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td colspan="2" style="border-bottom:1px solid #000000; vertical-align:top; padding:7px 7px 7px 7px; border-top:1px solid #000000; border-right:1px solid #000000; border-left:1px solid #000000; width:372px">\r\n\t\t\t<p style="line-height: 1.2; text-align: center;"><span style="overflow:hidden"><span style="overflow-wrap:break-word"><a href="https://collegevidya.com/courses/iim-courses-online/certificate-in-supply-chain-management/" style="text-decoration:none"><span style="font-size:10pt; font-variant:normal; white-space:pre-wrap"><span style="font-family:Arial,sans-serif"><span style="color:#1155cc"><span style="font-weight:400"><span style="font-style:normal"><span style="text-decoration:underline"><span style="-webkit-text-decoration-skip:none"><span style="text-decoration-skip-ink:none">IIM Logistics and Supply Chain Management Online</span></span></span></span></span></span></span></span></a></span></span></p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n</div>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The international partnership of the university with foreign institutions &amp; recruiters gives a deep insight into the global aspects of the business &amp; management domain. With its continuous effort to achieve academic excellence, the university has become the platform for nurturing &amp; producing creative minds that contribute productively not just for the betterment of the businesses but help in creating a socially &amp; environmentally better world.</p>',
    about_short_description:
      "<p>Established in 1996, the Indian Institute of Management Kozhikode (IIMK) is imparting academic excellence in the field of management. With a 3rd NIRF ranking in the management category, the institution is renowned for providing a standard curriculum design for its courses. The collaborations of the university with international institutions & recruiters are fulfilling the outgrowing need of the business industry in the National & International markets. The institution has recently launched its executive development courses in online mode to fill the gap between “what is learned” & “what is needed” in today’s era of the business industry.</p>",
    cv_take:
      "<p>- Top-ranked Management Institution </p>\r\n<p>- Best-in-Class Course Content</p>\r\n<p>- Experience-rich Faculty Members</p>\r\n<p>- International Partnerships </p>",
    compare_details:
      "<p>- Approval: AMBA, EQUIS, WES, AACSB</p>\r\n<p>- Year of Establishment: 1996</p>\r\n<p>- Mode of Learning: Online & On-Campus </p>",
    main_tag:
      "Ranked 3rd in NIRF 2024 Management Category With a Score of 77.90",
    prospectus_link: null,
    sample_certificate:
      "https://d1aeya7jd2fyco.cloudfront.net/upload_file/iim-kozhikode-timespro.webp",
    sample_certificate_partner: null,
    compare_image:
      "https://d1aeya7jd2fyco.cloudfront.net/upload_file/iim-kozhikode-compare.webp",
    podcast_link: "",
    video_link: "https://www.youtube.com/embed/AfuBrhfIVbI",
    search_keywords: "",
    cv_score: 8.3,
    type: 1,
    trophy_icon: 0,
    trophy_hide_on_frontend: 0,
    custom_tags: "",
    university_dynamic_tag_color: null,
    home_page: 0,
    loan_facility: "yes",
    owner_by: 1,
    status: 1,
    show_in_unversity_page: 1,
    nirf_ranking: "3",
    e_learning_facility: "Yes",
    online_classes: "Yes",
    industry_acceptance: "Yes",
    emi_facility_available: "No",
    mode: "Online",
    university_address: "IIMK Campus P. O, Kunnamangalam, Kerala 673570",
    establishment_year: "1996",
    toll_free_number: "18004205757",
    whatsapp_number: "919667229411",
    whatsapp_msg: null,
    placement_assistance: "NA",
    university_review_blog_link: null,
    university_website_link: null,
    naac_score: null,
    subsidy_university_name: "TimesPro",
    cashback_amount: 0,
    subsidy_referrer_amount: 5000,
    subsidy_email: 1,
    subsidy_amount_visible_on_page: 1,
    proceed_university_name: "TimesPro",
    proceed_university_url: "",
    proceed_university_key: "3edb5693-b088-11ef-9732-f23c921aa8b0",
    university_departments: "Executive",
    blog_url:
      "https://collegevidya.com/blog/is-iim-kozhikode-online-good-or-bad/",
    exam_pattern: "",
    examination:
      "<p>The examination mode followed at IIM Kozhikode encourages the engagement of students in the program by including case studies, capstone projects, &amp; other interactive academic activities. Apart from the theoretical knowledge, the university focuses on bridging the gap between conceptual understanding &amp; practical implementations in working professionals. In the pursuit of this aim, the university has made it mandatory for each student to perform well in these extra academic tasks as the scores of these tasks contribute to the final results. Apart from the term-end exams &amp; other assessment tasks, students are also graded based on their understanding of analytical tools.</p>",
    sample_certificate_description:
      "<p>Earn an industry-relevant certificate from:</p>\r\n\r\n<ul>\r\n\t<li>One of the best management institutions in India</li>\r\n\t<li>An institution of Global reputation</li>\r\n\t<li>A B-school with the best professors</li>\r\n</ul>",
    placement_partners:
      "<p>Students of the university:&nbsp;</p>\r\n\r\n<ul>\r\n\t<li>Have a strong professional network</li>\r\n\t<li>Got around an 8.1% increase in their average CTC</li>\r\n\t<li>Exploring a varied career diversity</li>\r\n</ul>",
    admission_open:
      '<p style="text-align: justify;">The admission procedure at IIM Kozhikode is based on the entrance exams &amp; the components of these exams are program-specific. In the case of online executive programs, candidates need to appear for an Executive Management Aptitude Test (EMAT) exam. After scoring minimum marks in the exams candidates can complete their admission procedure in their desired programs. Some of the common admission steps are mentioned below.</p>\r\n\r\n<p style="text-align: justify;"><strong>Step 1: </strong>Visit the official website of the university &amp; access the admission portal to fill out the application form.</p>\r\n\r\n<p style="text-align: justify;"><strong>Step 2: </strong>After filling up the application form with the mandatory details, submit it along with the required documents as asked in the form to get your academic &amp; professional references validated.</p>\r\n\r\n<p style="text-align: justify;"><strong>Step 3: </strong>The university conducts entrance tests like EMAT for an online executive program. This must be checked by you before the admission process as the rest of the formalities will resume only after clearing the entrance test. If you have a good score in CAT, GMAT, etc., you can directly jump on to the next step of the admission process.</p>\r\n\r\n<p style="text-align: justify;"><strong>Step 4: </strong>After making it through the entrance exams, you will be asked to submit some of the relevant documents like resumes, cover letters, SOPs, LORs, etc. by the admission committee of the university.</p>\r\n\r\n<p style="text-align: justify;"><strong>Step 5: </strong>After a thorough background check, you will be invited for an interview either via telephonic mode or through video conferencing. On cracking the interview, you will receive an offer letter with your blocking amount from the university.</p>\r\n\r\n<p style="text-align: justify;"><strong>Step 6: </strong>After paying the blocking amount, you can mark your spot in the upcoming batch of the course. The final fee payment will confirm your admission to the course.</p>',
    emi_description:
      "<p>The university offers Education Loan facilities for both online &amp; on-campus programs. This financial support is of great help to individuals who hold themselves back from acquiring higher education because of their financial constraints. This easy-to-pay fee payment method relieves candidates from the financial load of depositing the entire course fee at once.&nbsp;</p>\r\n\r\n<p>Apart from this loan facility, aspiring candidates can also look for the scholarship schemes proposed by the university. These schemes are based on the academic performance of the candidates. The specific terms &amp; conditions of these scholarship schemes can be checked from the official university website.</p>",
    emi_option: "",
    exam_mode: "Online",
    alumni_status: "",
    fee_description: "",
    fee_page_meta_title: null,
    fee_page_meta_description: "",
    fee_page_canonical_tag: "",
    fee_page_h_one_tag: "",
    no_of_students_visited: "",
    virtual_tour_url: null,
    fake_review_count: 338,
    important_dates:
      '<br><p>According to the latest UGC guidelines, all candidates must create their ABC ID and DEB ID to get admission.<a href="https://collegevidya.com/blog/what-is-abc-academic-bank-of-credits-id-step-by-step-guide/" target="_blank" style="color:blue;"><b>Click here</b></a> to Know more!</p>\r\n\r\n<p>What is Academic Bank of Credit (ABC) Notification by UGC?<a href="https://www.youtube.com/embed/W9YBFFY6Big" target="_blank" style="color:blue;"><b>Must Watch!</b></a> </p>\r\n\r\n<p>Now, Get admission twice a year, in July/August and January/February. Latest Notice by UGC, <a href="https://d1aeya7jd2fyco.cloudfront.net/uploads/2024/11/28/ugc-announces-admissions-in-2-academic-sessions.pdf" target="_blank" style="color:blue;" ><b>Click here</b></a> to know.</p>\r\n\r\n<p>UGC updated the list of approved Online programs for the academic batch of 2024-25, <a href="https://d1aeya7jd2fyco.cloudfront.net/uploads/2024/11/29/new-entitled-heis-for-online-2024.pdf" target="_blank" style="color:blue;"><b>Click here</b></a> to get the list!</p>\r\n\r\n<p>A degree obtained through ODL mode is equivalent to a traditional degree, <a href="https://d1aeya7jd2fyco.cloudfront.net/uploads/2025/01/25/ugc-notice-equivalence-of-desree.pdf"  target="_blank" style="color:blue;"><b>Click here</b></a> to know!</p>\r\n\r\n<p>Precautions to be taken by the students before enrolling for programs offered under ODL & Online Learning Mode, <a href="https://d1aeya7jd2fyco.cloudfront.net/uploads/2024/03/20/ugc_public-notice-precautions-odl-19-march-2024.pdf" target="_blank" style="color:blue;"><b>Click here</b></a> to know!</p>\r\n\r\n<p>UGC declares a 100% Fee Refund policy for students within a specified period by universities.<a href="https://d1aeya7jd2fyco.cloudfront.net/uploads/2023/11/29/fee-refund-policy-2023-1.pdf" target="_blank" style="color:blue;"><b>Click here</b></a>to read the full notice.</p>\r\n\r\n<p>UGC issues a public notice regarding misleading abbreviations in the names of Universities &amp; Colleges. <a href="https://d1aeya7jd2fyco.cloudfront.net/uploads/2024/05/01/ugc-public-notice-of-misleading-abbreviation.pdf" target="_blank"><span style="color:#0033ff;">Read the UGC Letter</span></a>.</p>',
    compare_count: 2226,
    psmu_heading: null,
    p_title: null,
    psmu_link: null,
    ptimer_des: null,
    pdyn_des: "",
    psmu_des: "",
    state: 24,
    city: 5691,
    blog_category: 6,
    university_type: [12],
  },
  universities_faqs_courses_all_faqs: [],
  universities_course_faculty: [],
};
