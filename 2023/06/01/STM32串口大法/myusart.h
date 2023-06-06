#ifndef __USART_H
#define __USART_H
#include "stm32f4xx_hal.h"
#include "stdio.h"

#define Print(...) HAL_UART_Transmit(&huart1,                              \
                                     (uint8_t *)tx_buf,                    \
                                     sprintf((char *)tx_buf, __VA_ARGS__), \
                                     0xffff)

#define buf_length 1024
extern uint8_t tx_buf[1024]; //发送缓存区

extern uint8_t rx_buf[buf_length]; //接收缓存区

extern void usart_init(void);

#endif /*__USART_H*/
