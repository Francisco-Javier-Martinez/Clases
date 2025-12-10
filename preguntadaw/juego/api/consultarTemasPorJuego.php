<?php
header('Content-Type: application/json; charset=utf-8');
// API deprecated: ruleta ahora usa MVC server-side. Mantener endpoint para compatibilidad mínima.
echo json_encode(['success' => false, 'message' => 'endpoint deprecated: use server-rendered ruleta.php (MVC)']);
exit;
?>
