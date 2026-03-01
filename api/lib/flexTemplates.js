/**
 * Shared LINE Flex Message Templates
 * Used by both notifyWeekly.js and cronNotify.js
 */

export const getLiffUrl = (liffId, courseId) => {
    return `https://liff.line.me/${liffId}/liff`;
};

export const createCourseCompletionFlex = ({ courseTitle, courseId, liffId }) => {
    const liffUrl = getLiffUrl(liffId, courseId);

    return {
        type: "flex",
        altText: `คอร์ส "${courseTitle}" จบลงแล้ว! กรุณาทำแบบประเมิน`,
        contents: {
            type: "bubble",
            size: "mega",
            header: {
                type: "box",
                layout: "vertical",
                contents: [{
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        { type: "text", text: "🎓", size: "xxl", flex: 0 },
                        { type: "text", text: "Course Flow", weight: "bold", size: "lg", color: "#ffffff", margin: "md", gravity: "center" }
                    ]
                }],
                backgroundColor: "#6366f1",
                paddingAll: "20px"
            },
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    { type: "text", text: "คอร์สเรียนจบลงแล้ว!", weight: "bold", size: "xl", color: "#1f2937" },
                    { type: "text", text: courseTitle, size: "md", color: "#6366f1", weight: "bold", margin: "md", wrap: true },
                    { type: "separator", margin: "xl" },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            { type: "text", text: "📋", size: "lg", flex: 0 },
                            { type: "text", text: "กรุณาทำแบบประเมินติดตามผล\nAction Commitment", size: "sm", color: "#4b5563", wrap: true, margin: "md" }
                        ],
                        margin: "xl"
                    }
                ],
                paddingAll: "20px"
            },
            footer: {
                type: "box",
                layout: "vertical",
                contents: [{
                    type: "button",
                    action: { type: "uri", label: "ทำแบบประเมินเลย", uri: liffUrl },
                    style: "primary",
                    color: "#6366f1",
                    height: "md"
                }],
                paddingAll: "20px"
            },
            styles: { footer: { separator: true } }
        }
    };
};

export const createWeeklyFollowUpFlex = ({ courseTitle, courseId, weekNumber, liffId }) => {
    const liffUrl = getLiffUrl(liffId, courseId);
    const weekColors = { 2: "#10b981", 4: "#3b82f6", 6: "#f59e0b", 8: "#8b5cf6" };
    const headerColor = weekColors[weekNumber] || "#6366f1";

    return {
        type: "flex",
        altText: `แจ้งเตือน: ทำแบบประเมินสัปดาห์ที่ ${weekNumber}`,
        contents: {
            type: "bubble",
            size: "mega",
            header: {
                type: "box",
                layout: "vertical",
                contents: [{
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        { type: "text", text: "📊", size: "xxl", flex: 0 },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                { type: "text", text: "ติดตามผล", weight: "bold", size: "md", color: "#ffffff" },
                                { type: "text", text: `สัปดาห์ที่ ${weekNumber}`, weight: "bold", size: "xxl", color: "#ffffff" }
                            ],
                            margin: "lg"
                        }
                    ],
                    alignItems: "center"
                }],
                backgroundColor: headerColor,
                paddingAll: "20px"
            },
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    { type: "text", text: "สวัสดีครับ! 👋", weight: "bold", size: "lg", color: "#1f2937" },
                    { type: "text", text: `ถึงเวลาทำแบบประเมินติดตามผลสัปดาห์ที่ ${weekNumber} แล้ว!`, size: "sm", color: "#4b5563", wrap: true, margin: "md" },
                    { type: "separator", margin: "xl" },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            { type: "text", text: "📚", size: "md", flex: 0 },
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    { type: "text", text: "คอร์ส", size: "xs", color: "#9ca3af" },
                                    { type: "text", text: courseTitle, size: "sm", color: "#1f2937", weight: "bold", wrap: true }
                                ],
                                margin: "md"
                            }
                        ],
                        margin: "xl"
                    }
                ],
                paddingAll: "20px"
            },
            footer: {
                type: "box",
                layout: "vertical",
                contents: [{
                    type: "button",
                    action: { type: "uri", label: "ทำแบบประเมินเลย", uri: liffUrl },
                    style: "primary",
                    color: headerColor,
                    height: "md"
                }],
                paddingAll: "20px"
            },
            styles: { footer: { separator: true } }
        }
    };
};
