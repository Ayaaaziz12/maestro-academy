<?php
return [
	'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost:5173')), 
];
