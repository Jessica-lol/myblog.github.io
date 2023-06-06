#include "myusart.h"
#include "usart.h"

extern int rx_flag;
extern uint16_t rx_length;
uint8_t rx_buf[buf_length];//定义的串口接收缓存区
uint8_t tx_buf[1024];//定义的串口发送缓存区

void USART1_IRQHandler(void)//串口空闲idle中断
{
	if(__HAL_UART_GET_FLAG(&huart1,UART_FLAG_IDLE) != RESET)
	{
		__HAL_UART_CLEAR_IDLEFLAG(&huart1);	//清除中断标志位										
		HAL_UART_DMAStop(&huart1);//停止DMA接收
		
		rx_length = buf_length - hdma_usart1_rx.Instance->NDTR;//计算长度
		rx_flag = 1;//表示接受到了
	}
	
}

void usart_init(void)
{
	__HAL_UART_ENABLE_IT(&huart1,UART_IT_IDLE);//IDLE中断使能
	HAL_UART_Receive_DMA(&huart1, rx_buf, buf_length);//使能DMA接收
}