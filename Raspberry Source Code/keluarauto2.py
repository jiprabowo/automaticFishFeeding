import RPi.GPIO as GPIO
import datetime
import time as delay
from datetime import date
from datetime import time
from datetime import datetime
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(4,GPIO.OUT)
GPIO.setup(18,GPIO.OUT)
p = GPIO.PWM(18,50)
p.start(7.5)
GPIO.output(4,GPIO.HIGH)

while True:
	from firebase import firebase
	kondisi = 1
	timeRaspberry = datetime.now()
	waktu = timeRaspberry.strftime("%H:%M")
	firebase = firebase.FirebaseApplication('https://flazh-de669.firebaseio.com/', None)
	timeFirebase1 = firebase.get('/jadwals/jadwal1', 'jadwal_jam')
	timeFirebase2 = firebase.get('/jadwals/jadwal2', 'jadwal_jam')
	timeFirebase3 = firebase.get('/jadwals/jadwal3', 'jadwal_jam')
	timeFirebase4 = firebase.get('/jadwals/jadwal4', 'jadwal_jam')
	timeFirebase5 = firebase.get('/jadwals/jadwal5', 'jadwal_jam')
	kondisiFirebase = firebase.get('/kondisis/kondisi', 'kondisi')
	kondisiFirebaseInt = int(kondisiFirebase)
	print("Waktu di Raspberry: ",waktu)
	if(kondisi == kondisiFirebaseInt):
		from firebase import firebase
		p.ChangeDutyCycle(2.5)
		delay.sleep(0.3)
		p.ChangeDutyCycle(7.5)
		firebase = firebase.FirebaseApplication('https://flazh-de669.firebaseio.com/', None)		
		firebase.put('/kondisis/kondisi','kondisi',0)		
	if(waktu == timeFirebase1 or waktu == timeFirebase2 or waktu == timeFirebase3 or waktu == timeFirebase4 or waktu == timeFirebase5):
		from firebase import firebase	
		p.ChangeDutyCycle(2.5)
		delay.sleep(0.5)
		p.ChangeDutyCycle(7.5)
		firebase = firebase.FirebaseApplication('https://flazh-de669.firebaseio.com/', None)		
		firebase.put('/kondisis/kondisi','kondisi',0)
		delay.sleep(30)
