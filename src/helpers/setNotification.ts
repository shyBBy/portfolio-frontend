import React from 'react';

export const setNotification = (
    toast: React.MutableRefObject<any>,
    msg?: null | string,
    severity: 'success' | 'error' = 'error',
) => {
    toast.current.show({
        severity,
        summary: severity,
        detail: msg ?? 'Coś poszło nie tak.',
        life: 4000,
    });
};