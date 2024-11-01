import React from 'react';

export function getmonth() {
    const dates = [];
    const currentDate = new Date();
    const endDate = new Date(currentDate); // 新しい Date オブジェクトを作成
    endDate.setMonth(currentDate.getMonth() + 2);

    while (currentDate < endDate) {
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        dates.push({ month, day });

        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}
