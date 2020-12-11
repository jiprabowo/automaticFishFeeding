import RPi.GPIO as GPIO
import time as delay
from pyfcm import FCMNotification
import schedule
GPIO.setmode(GPIO.BCM)

a_pin = 23
b_pin = 24

push_service = FCMNotification(api_key="AAAAIti2ROw:APA91bEIXxSJFF3Xg8gQxjxyHvTi34SkCezVETLB6KvTHNtVbDdiwcfgI_Kw19kuLyDW-UIw4Flst7U7wDxP76EX3V7UHlltZt0y2XdnYiIJDi9y35dOGIirba4-f8KHZxZHDTDomKw7")
registration_id = "cHMCYIlE2jI:APA91bHdIuAfCXNORkX8on-mHMHi4jpb5gHvlAKvx_CRgEHbuTOjww7x0VhrK6zhB_1cVZI9vFAfwVcxdwO00SKN7wans8PU_6c3hN930nRgX9k7_5n58D_HR8GCjGaeayAA_zO4hRzP"
message_title = "Automatic Fish Feed"
message_body = "Makanan Dibawah 25%"

def discharge():
	GPIO.setup(a_pin, GPIO.IN)
	GPIO.setup(b_pin, GPIO.OUT)
	GPIO.output(b_pin, False)
	delay.sleep(0.005)

def charge_time():
	GPIO.setup(b_pin, GPIO.IN)
	GPIO.setup(a_pin, GPIO.OUT)
	count = 0
	GPIO.output(a_pin, True)
	while not GPIO.input(b_pin):
		count = count + 1
	return count

def analog_read():
	discharge()
	return charge_time()
while True:
	if(analog_read() < 100):
		result = push_service.notify_single_device(registration_id=registration_id, message_title=message_title, message_body=message_body)
		print result
		print(analog_read())
		delay.sleep(3600)
